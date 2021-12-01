class Api::V1::RestaurantsController < ActionController::Base
  acts_as_token_authentication_handler_for User, except: [ :index, :show ]
  before_action :set_restaurant, only: [ :show, :destroy, :update ]

  def index
    restaurants = Restaurant.all
    render json: restaurants
  end

  def show
  end

  def update
    if @restaurant.update(restaurant_params)
      render :show
    else
      render_error
    end
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)
    @restaurant.user = current_user
    authorize @restaurant
    if @restaurant.save
      render :show, status: :created
      render json: @restaurant
    else
      render_error
      render json: @restaurant
    end
  end

  def destroy
    @restaurant.destroy
    head :no_content
    render json: @restaurant
    # No need to create a `destroy.json.jbuilder` view
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :address)
  end

  def render_error
    render json: { errors: @restaurant.errors.full_messages },
      status: :unprocessable_entity
  end

  def set_restaurant
    @restaurant = Restaurant.find(params[:id])
    authorize @restaurant  # For Pundit
    render json: restaurant
  end
end
