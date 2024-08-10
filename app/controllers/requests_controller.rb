class RequestsController < ApplicationController
  def index
    requests = Request.all

    json_response = []
    requests.each do |request|
      json_response << { id: request.id, itemName: request.item_name, cost: request.cost, url: request.url,
                         isPurchased: request.is_purchased }
    end

    respond_to do |format|
      format.html { redirect_to root_path }
      format.json { render json: json_response }
    end
  end

  def create
    request = Request.new(item_name: params[:itemName], cost: params[:cost], url: params[:url])

    return head :ok if request.save

    p request.errors
    head :unprocessable_entity
  end

  def purchase
    request = Request.find(params[:id])
    return head :ok if request.purchase

    head :unprocessable_entity
  end
end
