require "bundler/setup"

task default: :test

desc "Publish \"marketing\" docs"
task :publish_docs do
  sh("git rebase master gh-pages")
  sh("git checkout master")
  sh("git push origin master")
  sh("git push origin gh-pages")
end

desc "Publish new release"
task publish: :publish_docs do
  sh("git push --tags")
  sh("npm publish")
end

desc "Open your default browser with the test page"
task :test do
  sh("open test/index.html")
end
