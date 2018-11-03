class MessagesController < ApplicationController

  def index
  end

  def create
    @message = Message.new(message_param)
    if @message.save
      redirect_to root_path
    else
      render :index, notice: "メッセージを入力してください"
    end
  end

  private

  def message_param
    params.require(:message).permit(:name, { :user_ids, :group_ids => [] })
end
