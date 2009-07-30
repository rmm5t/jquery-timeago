verbose(true)

task :default => :test

desc 'Publish "marketing" docs'
task :publish do
  sh("git rebase master gh-pages")
  sh("git checkout master")
  sh("git push")
  sh("git push --tags")
end

desc 'Open your default browser with the test page'
task :test do
  sh("open test/test.html")
end
