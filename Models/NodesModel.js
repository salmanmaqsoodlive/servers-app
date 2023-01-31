module.exports = {
  getStatus: () => {
    return {
      node_name: 'AWS Lowlands'
    };
  },
  getBlocks: () => [
    {
      id: '1',
      data: {
        description:
          'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
        author: 'xyz'
      }
    },
    {
      id: '2',
      data: {
        description:
          'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
        author: 'abc'
      }
    }
  ]
};
