class TestController < ApplicationController
  def index
    
    delay = `ps aux|grep 'delay'`
    jobs = delay.split("\n").select{|d| d.include?('delayed_job')}
    cpu = []; memory = [];
    jobs.each do |job|
      cpu.push(job.split(' ')[2])
      memory.push(job.split(' ')[3])
    end
    puts "delayed Job"
    puts cpu.join(',')
    puts memory.join(',')

    Delayed::Worker.logger.info "START to PARSE SCENE"  
    Delayed::Worker.logger.info "  time: #{Time.now}"    

    puts report_time = (Time.now - Time.now)*1000 

    puts tmp_pano_image_path = change_release_path(root_path) 

  end

  def change_release_path(path)
    paths = path.split("/")
    index = paths.index("releases")
    if index.present?
      paths.slice!(index + 1)
      paths.join("/").gsub("releases", "shared")
    else
      path
    end
  end

end
