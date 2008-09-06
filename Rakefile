SETTINGS = {
  :rsync_server  => 'timeago.yarp.com:/var/www/timeago/',
  :rsync_options => '-e ssh -avz --delete --exclude=.git'
}

task :default => :test

desc 'Publish to server (edit Rakefile to config)'
task :publish do
  cmd = "rsync #{SETTINGS[:rsync_options]} ./ #{SETTINGS[:rsync_server]}"
  puts "\nSyncing with server: #{cmd}\n\n"
  system(cmd)
end

desc 'Open your default browser with the test page'
task :test do
  system("open test.html")
end
