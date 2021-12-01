class RestaurantPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end
  def index?
    true
  end
  def show?
    true
  end
  def update?
    record.user == user
  end
  def create?
    user.present?
  end
  def destroy?
    update?
  end
end
