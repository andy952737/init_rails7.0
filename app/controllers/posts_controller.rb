class PostsController < ApplicationController

  layout 'public'

  before_action :find_post, :only => [:show, :edit, :update, :destroy]

  def index
    puts "check index" 
    puts params[:q]

    @posts = Post.all
  end

  def new
  end

  def show
  end 

  def edit
  end

  def create 
    puts "check post" 
    title = params[:post][:title]
    contact = params[:post][:contact]

    post_create = Post.create(params_post_permit)

    redirect_to url_for(action: :index)  
  end 

  def update
    puts "check update"
    @Post.update(params_post_permit)
    redirect_to url_for(action: :index)
  end 

  def destroy
    puts "check destroy"
    @Post.destroy
    redirect_to url_for(action: :index)  
  end

  private 

  def params_post_permit
    params.require(:post).permit(:title, :contact)
  end  
 
  def find_post
    @Post = params[:id] ? Post.find(params[:id]) : Post.new
  end

end
