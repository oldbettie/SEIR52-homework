class MountainsController < ApplicationController
    def index
        @mountains = Mountain.all
    end

    def show
        @mountain = Mountain.find params[:id]
    end

    def new 
    end

    def create  
        mountain = Mountain.create :name => params[:name], :image => params[:image], :elevation => params[:elevation], :country => params[:country], :range => params[:range], :listing => params[:listing]
        redirect_to mountain_path(mountain.id)
    end

    def edit
        @mountain = Mountain.find params[:id] #wtf...i got a weird thing where i could edit and update my mountains without an update post action or path...
    end

    def update
        mountain = Mountain.find params[:id]
        mountain.name = params[:name]
        mountain.image = params[:image]
        mountain.elevation = params[:elevation]
        mountain.country = params[:country]
        mountain.range = params[:range]
        mountain.listing = params[:listing]
        mountain.save
        redirect_to mountain_path(mountain.id)
    end

    def delete
        mountain = Mountain.find params[:id]
        mountain.destroy
        redirect_to mountains_path
    end

end