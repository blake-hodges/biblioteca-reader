import sys
import argostranslate.package
import argostranslate.translate

from_code = "es"
to_code = "en"

text_to_translate = sys.argv[1]

# Download and install Argos Translate package
argostranslate.package.update_package_index()
available_packages = argostranslate.package.get_available_packages()
package_to_install = next(
    filter(
        lambda x: x.from_code == from_code and x.to_code == to_code, available_packages
    )
)
argostranslate.package.install_from_path(package_to_install.download())

# Translate
translated_text = argostranslate.translate.translate(text_to_translate, from_code, to_code)
print(translated_text)

sys.stdout.flush()