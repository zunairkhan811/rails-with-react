class Api::V1::HomesController < ApplicationController
  def index
    @homes = Home.all
    render json: @homes, status: :ok
  end
end
