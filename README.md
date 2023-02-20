# Resume

This is a repo for my resume. Built with a Swiss design theme, heavily inspired by [Damian Watracz's design](https://dribbble.com/shots/1768058-Swiss-Style-Resume-2014).

## Development

Pull in dependencies:

```bash
npm install
```

Download fonts (not included in source) and unzip in assets:
- [Inter](https://rsms.me/inter/)
- [Fork Awesome](https://forkaweso.me)
- [Aurebesh Pro Font](https://galacticsurplus.co/products/aurebesh-pro-font)

Start tailwind CLI to generate CSS and web server to see updates:

```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

npx serve
```

### Updating PDF

The CSS print options does not enforce consistent printing in browsers. Instead, we'll provide a nicely formatted PDF for easy download. These settings may change, but what I've found useful (using the Firefox print options):
- Paper size: A4
- Scale: 90
- Margin: 0 .13 0 .13
- Print backgrounds: True

## License

This project is licensed under the MIT License - see the [LICENSE file](LICENSE) for details.
