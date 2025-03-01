import { Container, Title, Filters } from '@/components/shared';
import { ProductCard } from '@/components/shared/product-card';
import { ProductsGroupList } from '@/components/shared/products-group-list';
import { TopBar } from '@/components/shared/top-bar';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title={'Пиццы'}
                items={[
                  {
                    id: 1,
                    name: 'Маргарита',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/0194d4fa65f277598a143a7ba341da53.avif',
                    price: 599,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Маргарита',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/0194d4fa65f277598a143a7ba341da53.avif',
                    price: 599,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Маргарита',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/0194d4fa65f277598a143a7ba341da53.avif',
                    price: 599,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Маргарита',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/0194d4fa65f277598a143a7ba341da53.avif',
                    price: 599,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Маргарита',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/0194d4fa65f277598a143a7ba341da53.avif',
                    price: 599,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: 'Маргарита',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/0194d4fa65f277598a143a7ba341da53.avif',
                    price: 599,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title={'Комбо'}
                items={[
                  {
                    id: 1,
                    name: 'Комбо 1',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/your-image-url-1.avif',
                    price: 799,
                    items: [{ price: 750 }],
                  },
                  {
                    id: 2,
                    name: 'Комбо 2',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/your-image-url-2.avif',
                    price: 899,
                    items: [{ price: 850 }],
                  },
                  {
                    id: 3,
                    name: 'Комбо 3',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/your-image-url-3.avif',
                    price: 999,
                    items: [{ price: 950 }],
                  },
                  // Добавьте больше объектов по необходимости
                ]}
                categoryId={2} 
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
