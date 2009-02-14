SETTINGS = {
  :rsync_server  => 'timeago.yarp.com:/var/www/timeago/',
  :rsync_options => '-e ssh -avz --delete --exclude=.git'
}

verbose(true)

task :default => :test

desc 'Publish "marketing" docs'
task :publish do
  sh("git rebase master gh-pages")
  sh("git checkout master")
  sh("git push")
  sh("git push --tags")

  sh("rsync #{SETTINGS[:rsync_options]} ./ #{SETTINGS[:rsync_server]}")
end

desc 'Open your default browser with the test page'
task :test do
  sh("open test.html")
end
