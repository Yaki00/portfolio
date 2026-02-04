/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Si tu déploies sur GitHub Pages avec un sous-chemin (ex: username.github.io/portfolio)
  // décommente et modifie la ligne ci-dessous :
  // basePath: '/portfolio',
}

module.exports = nextConfig
