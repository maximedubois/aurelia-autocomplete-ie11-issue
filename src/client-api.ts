export class ClientApi {
  
  public search(search: string): Promise<any> {
    const list = [];
    list.push({ Code: "1234", Description: "Description 1234" });
    list.push({ Code: "4567", Description: "Description 4567" });
    list.push({ Code: "8901", Description: "Description 8901" });
    list.push({ Code: "5343", Description: "Description 5343" });
    list.push({ Code: "111", Description: "Description 3245" });
    list.push({ Code: "3211145", Description: "other text written" });
    list.push({ Code: "333245", Description: "yet another text" });
    list.push({ Code: "3323245", Description: "Description 3245" });
    list.push({ Code: "3222345", Description: "Description 3245" });


    const returnList = list.filter(function(item) {
      return item.Description.indexOf(search) != -1;
    });
    
    return Promise.resolve(returnList);
  }
}
