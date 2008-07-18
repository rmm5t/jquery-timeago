SETTINGS = {
  'rsync_server' => ENV['rsync_server'] || 'timeago@yarp.com:/var/www/timeago/',
  'rsync_options' => ENV['rsync_options'] || '-e ssh -avz --delete --exclude=.git'
}

desc 'Publishes to server (edit Rakefile to config)'
task :publish do
  cmd = "rsync #{SETTINGS['rsync_options']} ./ #{SETTINGS['rsync_server']}"
  puts "\nSyncing with server: #{cmd}\n\n"
  system(cmd)
end
