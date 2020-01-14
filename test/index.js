export const currentFileUrl =
    import.meta.url;

    const templateDir = path.resolve(
    new URL(currentFileUrl).pathname,
    '../templates',
    options.template.toLowerCase()
);

