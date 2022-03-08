/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode();
    let prev = dummy;
    
    while(list1 && list2) {
        console.log('val of list1 ', list1.val);
        console.log('val of list2 ', list2.val);
        if (list1.val <= list2.val) {
            prev.next = list1;
            prev = list1;
            list1 = list1.next;
            console.log('list1 prev >>>', prev);
            console.log('list1 >>>', list1);
        } else {
            prev.next = list2;
            prev = list2;
            list2 = list2.next;
            console.log('list2 prev >>>', prev);
            console.log('list2 >>>', list2);
        }
        console.log('----------------------')
    }
    
    if(!list1) prev.next = list2;
    if(!list2) prev.next = list1;
    
    return dummy.next;
};
/**
* Pseudo
    1. duumy node 생성
    2. list1과 list2 비교
    3. if (list1 <= list2)
            prev.next = list1
            prev = list1
    return sort
    
Time Complexity O(n)

*/