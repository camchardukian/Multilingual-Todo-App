const Helpers = {
  generateTodoInsertionIndex: ({
    mostRecentDraggedOnItems,
    todoListWithoutItemToBeMoved
  }) => {
    const selectedIndexesArray = [];
    for (let i = 0; i < todoListWithoutItemToBeMoved.length; i += 1) {
      if (
        mostRecentDraggedOnItems.includes(
          todoListWithoutItemToBeMoved[i]["todoId"]
        )
      ) {
        if (
          i === 0 &&
          mostRecentDraggedOnItems[0] === mostRecentDraggedOnItems[1]
        ) {
          return 0;
        } else {
          selectedIndexesArray.push(i);
        }
        if (mostRecentDraggedOnItems.length === 1) {
          return mostRecentDraggedOnItems[0];
        }
      }
      if (
        selectedIndexesArray.length === 2 ||
        i === todoListWithoutItemToBeMoved.length - 1
      ) {
        if (selectedIndexesArray.length === 2) {
          return selectedIndexesArray[1];
        } else {
          return selectedIndexesArray[0] + 1;
        }
      }
    }
  }
};
module.exports = Helpers;
