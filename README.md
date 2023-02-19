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

## License

This project is licensed under the MIT License - see the [LICENSE file](LICENSE) for details.
