import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'sl6qks5v',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skbo3cVUteW94ezpjbF7NWS6jSnFd4xKbYzMgt77nhME0oJEJYyBH7wOkbTEyNUEQ0lFT8zJfOrmNpHr0Tpj5iqAkk2memWaiDtgNCbdAPS2JgZePCnU2oZjNQzUSMvx239W3oxgXuHXyPKgYPKyHwV6sovud5fo75J7Zy0dnxG0tl0TQBMy',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
