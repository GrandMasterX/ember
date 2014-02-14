class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :image
end
