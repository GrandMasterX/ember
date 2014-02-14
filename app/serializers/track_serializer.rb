class TrackSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :cover, :file
end
