require "bundler/setup"

task default: :test

desc "Publish new release"
task :publish do
  sh("git push --tags")
  sh("npm publish")
end

desc "Open your default browser with the test page"
task :test do
  sh("open test/index.html")
end

desc "Automatically wrap given locale files in UMD declarations"
task :umd, [:files] do |t, args|
    def indent(str)
        indented = str.split("\n").map do |line|
          "  #{line}"
        end
        indented.join("\n")
    end

    def wrap_in_umd(str)
      <<~HEREDOC
        (function (factory) {
          if (typeof define === 'function' && define.amd) {
            define(['jquery'], factory);
          } else if (typeof module === 'object' && typeof module.exports === 'object') {
            factory(require('jquery'));
          } else {
            factory(jQuery);
          }
        }(function (jQuery) {
        #{indent(str)}
        }));
      HEREDOC
    end
    
    matches = Dir.glob(args[:files])
    puts "Pattern did not match any file" if matches.length == 0
    matches.each do |file|
        input = File.read(file)
        base = Pathname.new(file).basename
        output = File.open("locales/#{base}", "w")
        output.write(wrap_in_umd(input))
        output.close
    end
end
