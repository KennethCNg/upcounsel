# == Schema Information
#
# Table name: tables
#
#  id         :integer          not null, primary key
#  size       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Table < ApplicationRecord
    validates :size, presence: true
    has_many :cells, :dependent => :destroy
    
end
