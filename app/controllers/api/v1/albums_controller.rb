class Api::V1::AlbumsController < ApplicationController
  respond_to :json

  def index
    respond_with Album.all
  end

  def show
    respond_with Album.find(params[:id])
  end

  def create
    respond_with Album.create(album_params)
  end

  def edit
    @album = Album.find(params[:id])
  end

  def update
    respond_with Album.update(params[:id], album_params)
  end

  def destroy
    respond_with Album.destroy(params[:id])
  end

  private
  def album_params
    params.require(:album).permit(:title, :genre, :cover, :image, :releaseDate)
  end
  
end