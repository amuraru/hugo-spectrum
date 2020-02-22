# Adobe Coral Spectrum hugo theme

Hugo theme using Adobe [coral-spectrum](https://opensource.adobe.com/coral-spectrum/dist/documentation/) Web Components following Spectrum design patterns.

# Usage

See [exampleSite](exampleSite/) for a sample docs website.

A live demo is available at: https://git.corp.adobe.com/pages/reef/hugo-spectrum



### Maintainers Notice

When updating hugo theme in this repository make sure you:

1. Update the `exampleSite` theme version:
    ```sh
    cd exampleSite
    git submodule update --remote --merge
    git commit themes/hugo-spectrum -m "Updated theme in exampleSite"
    git push
    ```

2. Generate and publish `exampleSite` in `gh-pages` branch

    Run [publish-to-gh-pages.sh](publish-to-gh-pages.sh)

### Contributing

Contributions are welcomed! Read the [Contributing Guide](./.github/CONTRIBUTING.md) for more information.

### Licensing

This project is licensed under the Apache V2 License. See [LICENSE](LICENSE) for more information.