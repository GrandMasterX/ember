class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :image, :cover
end
