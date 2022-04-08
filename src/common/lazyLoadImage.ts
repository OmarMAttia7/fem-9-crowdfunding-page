const lazyLoadImage = async (imageName: string) => {
  let src = await import(
    /* webpackMode: "lazy-once" */
    `../images/${imageName}`
  );
    console.log(src.default)
  return src.default;
};

export default lazyLoadImage;