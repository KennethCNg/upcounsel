require 'rails_helper'

RSpec.describe TablesController, type: :controller do 

    render_views
    let(:json) { JSON.parse(response.body) }    

    describe "POST #create" do
        context "with invalid params" do
            before do
                post :create, params: { cells: "This will break" }
            end
            it "should have http status 422" do
                expect(response.status).to eq(422)                
            end     
        end

        context 'with vaid params' do
            before do
              post :create, params: { cells: "3 2\r\nB2\r\n4 3 *\r\nC2\r\nA1 B1 / 2 +\r\n13\r\nB1 A2 / 2 *" }            
            end
        
            it 'creates a new table' do
              expect(Table.last.size).to eq("3 2\r")
            end
            it 'creates a new cell' do
              expect(Table.last.id).to eq(Cell.last.table_id)
            end
            it "should have http status 200" do
                expect(response.status).to eq(200)                
            end     
          end
    end 
end
