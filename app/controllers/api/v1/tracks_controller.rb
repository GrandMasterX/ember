class Api::V1::TracksController < ApplicationController
  respond_to :json

  def index
    respond_with Track.all
  end

  def show
    respond_with Track.find(params[:id])
  end
end