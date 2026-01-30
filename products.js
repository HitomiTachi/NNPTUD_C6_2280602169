// Câu 1: Khai báo constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products gồm ít nhất 6 sản phẩm, thuộc tối thiểu 2 danh mục khác nhau
const products = [
    new Product(1, "iPhone 15 Pro", 35000000, 10, "Smartphone", true),
    new Product(2, "Samsung Galaxy S24", 28000000, 5, "Smartphone", true),
    new Product(3, "MacBook Air M2", 32000000, 3, "Laptop", false),
    new Product(4, "Dell XPS 13", 25000000, 0, "Laptop", true),
    new Product(5, "Apple Watch Series 9", 12000000, 7, "Accessories", true),
    new Product(6, "AirPods Pro 2", 6000000, 2, "Accessories", false)
];

// Câu 3: Tạo mảng mới chỉ chứa: name, price của mỗi sản phẩm
const namePriceArray = products.map(p => ({ name: p.name, price: p.price }));
console.log("Câu 3:", namePriceArray);

// Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
const inStockProducts = products.filter(p => p.quantity > 0);
console.log("Câu 4:", inStockProducts);

// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không
const hasExpensiveProduct = products.some(p => p.price > 30000000);
console.log("Câu 5:", hasExpensiveProduct);

// Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable true) hay không
const allAccessoriesAvailable = products.filter(p => p.category === "Accessories").every(p => p.isAvailable);
console.log("Câu 6:", allAccessoriesAvailable);

// Câu 7: Tính tổng giá trị kho hàng. Giá trị kho = price x quantity
const totalInventoryValue = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
console.log("Câu 7:", totalInventoryValue);

// Câu 8: Dùng for...of Duyệt mảng products và in ra: Tên sản phẩm, Danh mục, Trạng thái
console.log("Câu 8:");
for (const p of products) {
    console.log(`Tên: ${p.name}, Danh mục: ${p.category}, Trạng thái: ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`);
}

// Câu 9: dùng for...in để: In ra tên thuộc tính, In ra giá trị tương ứng
console.log("Câu 9:");
for (const p of products) {
    for (const key in p) {
        if (p.hasOwnProperty(key)) {
            console.log(`Thuộc tính: ${key}, Giá trị: ${p[key]}`);
        }
    }
    console.log("---");
}

// Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
const sellingAndInStockNames = products.filter(p => p.isAvailable && p.quantity > 0).map(p => p.name);
console.log("Câu 10:", sellingAndInStockNames);
