var context = require.context('./__tests__', true, /\.test\.(js|jsx)$/);
context.keys().forEach(context);
