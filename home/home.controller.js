class HomeCtrl {
  constructor($scope) {
    'ngInject';

    $scope.today = new Date();

    $scope.appetizers = [
      {
        name: 'Caprese',
        description: 'Mozzarella, tomotoes, basil, balsamic glaze.',
        price: 4.95
      },
      {
        name: 'Mozzarella Sticks',
        description: 'Served with marinara sauce.',
        price: 3.95
      },
      {
        name: 'Bruschetta',
        description: 'Grilled bread garlic, tomatoes, olive oil.',
        price: 4.95
      }
    ];

    $scope.mains = [
      {
        name: 'Nachos Pizza',
        description: 'Crispy nachos, tomatoes, olives and cheese.',
        price: 6.95
      },
      {
        name: 'Pasta Veg Supreme',
        description: 'Tricolor peppers, green beans, carrots, zucchini.',
        price: 10.95
      },
      {
        name: 'Pasta Three Bean Salad',
        description:
          'Tricolor peppers, cannelini beans, red kidney beans, white beans, carrots, lettuce, cucumbers.',
        price: 12.95
      }
    ];

    $scope.extras = [
      {
        name: 'Jalapeno Peppers',
        description:
          'Whole Jalapeno stuffed with cheese and spices in flavoured batter.',
        price: 6.95
      },
      {
        name: 'Chilli bites',
        description: 'Spicy flavoured veggies in chickpea batter.',
        price: 4.95
      },
      {
        name: 'Tofu Corn fry',
        description: 'Whole corn kernels stir fried with peppers and tofu.',
        price: 5.95
      }
    ];
  }
}

export default HomeCtrl;
