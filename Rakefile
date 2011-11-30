require "bundler/setup"

task :default => :watch

desc "Publish \"marketing\" docs"
task :publish do
  sh("git rebase master gh-pages")
  sh("git checkout master")
  sh("git push origin master")
  sh("git push origin gh-pages")
  sh("git push --tags")
end

desc "Build everything"
task :build do
  rebuild_coffee
end

desc "Watch for changes and test the site"
task :watch => :build do
  sh("open test/index.html")
  monitor
end

desc "Open your default browser with the test page"
task :test do
  sh("open test/index.html")
end

def rebuild_coffee(base = nil, relative = "**/*.coffee")
  sh("coffee -c #{relative}")
end

def monitor
  require "fssm"
  puts ">>> Monitoring for changes. Press Ctrl-C to Stop."
  FSSM.monitor do
    path "." do
      glob "**/*.coffee"
      update &method(:rebuild_coffee)
      delete &method(:rebuild_coffee)
      create &method(:rebuild_coffee)
    end
  end
end

