const nhanvien = [
    {
      id: 1,
      ten: 'hoang',
      luong: 10000000,
      thuong: 500000,
      trocap: 1500000,
      chucvu: 'nhanvien'
    },
    {
      id: 6,
      ten: 'van anh',
      luong: 10000000,
      thuong: 500000,
      trocap: 1500000,
      chucvu: 'nhanvien'
    },
    {
      id: 51,
      ten: 'nhi',
      luong: 5000000,
      thuong: 100000,
      trocap: 100000,
      chucvu: 'nhanvien'
    },
    {
      id: 14,
      ten: 'an',
      luong: 14000000,
      thuong: 400000,
      trocap: 2500000,
      chucvu: 'nhanvien'
    },
    {
      id: 11,
      ten: 'tuan anh',
      luong: 20000000,
      thuong: 1100000,
      trocap: 4500000,
      chucvu: 'giamdoc'
    }
]
function salaryCal() {
    var sum = nhanvien.reduce(function(filtered, man) {
        filtered += man.luong + man.thuong + man.trocap;
        return parseInt(filtered);
    }, []);
    return sum;
}

sum = salaryCal();
console.log("tong tien phai tra", sum);