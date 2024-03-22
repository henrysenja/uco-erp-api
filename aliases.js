const path = require('path');
const aliases = require('module-alias');

aliases.addAliases({
    '@models': path.join(__dirname, 'models'),
    '@utils': path.join(__dirname, 'utils'),
    // '@views': path.join(__dirname, 'views'),
    // '@seeders': path.join(__dirname, 'seeders'),
    '@routes': path.join(__dirname, 'routes'),
    // '@middlewares': path.join(__dirname, 'middlewares'),
    '@controllers': path.join(__dirname, 'controllers'),
    // '@constants': path.join(__dirname, 'constants'),
    // '@config': path.join(__dirname, 'config'),
});