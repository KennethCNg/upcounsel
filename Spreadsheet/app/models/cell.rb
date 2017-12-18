# == Schema Information
#
# Table name: cells
#
#  id         :integer          not null, primary key
#  value      :string           not null
#  table_id   :integer          not null
#  input      :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Cell < ApplicationRecord
    validates :value, :table_id, presence: true
    validates :input, inclusion: { in: [ true, false ] }

    belongs_to :table
end
