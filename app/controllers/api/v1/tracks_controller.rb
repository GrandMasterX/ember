class Api::V1::TracksController < ApplicationController
  respond_to :json

  def index
    respond_with Track.all
  end

  def show
    respond_with Track.find(params[:id])
  end

  def create
    respond_with Post.create(post_params)
  end

  def edit
    @album = Track.find(params[:id])
  end

  def update
    respond_with Track.update(params[:id], post_params)
  end

  def destroy
    respond_with Track.destroy(params[:id])
  end

  private
  def post_params
    params.require(:post).permit(:title, :genre, :cover, :file, :album_id, :releaseDate)
  end
end