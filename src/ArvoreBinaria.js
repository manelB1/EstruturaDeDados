function BinarySearchTree(){
    var node = function(key){
        this.key = key;
        this.right = null;
        this.left = null;
    }

    var root = null;

    this.insert = function(key){
        var newNode = new Node(key)

        if(root === null){
            root = newNode

        }else{
            inserNode(root, newNode)
        }

    }
    var InsertNode = function(node, newNode){
        if(newNode.key < node.key){
            if(node.left===null){
                node.left = newNode
            }else{
                inserNode(node.left, newNode)
            }
        }else{
            if(node.right===null){
                node.right = newNode
            }else{
                inserNode(node.right, newNode)
            }
        }
    }

    this.search = function(key){
        return searchNode(root, key)

    }
    var searchNode = function(node, key){
        if(node === null){
            return false
        }
        if(key < node.key){
            return searchNode(node, left, key)
        }else if(key > node.key){
            return searchNode(node.right.key)
        }else{
            return true;
        }
    }

    this.remove = function(key){
        root = removeNode(root, key)

    }
    
    var removeNode = function(node, key){
        if(node=== null){
            return null
        }
        if(key < node.key){
            node.left = removeNode(node, left, key)
            return node
        }else if(key > node.key){
            node.right = removeNode(node, right, key)
            return node
        }else{
            if(node.left === null && node.right === null){
                node = null
                return node
            }
            if(node.left === null){
                node = node.right
                return node
            }else if(node.right === null){
                node = node.left
                return node
            }
            
            var aux = findMinNode(node.right)
            node.key = aux.key
            node.right = removeNode(node.right, aux.key)
            return node

        }
    }
    
    this.min = function(key){
        return minNode(root)
    }

    var minNode = function(node){
        if(node){
            while(node && node.left !== null){
                node = node.left
            }
            return node.key
        }
        return null
    }

    var findMinNode = function(node){
        while(node && node.left !== null){
            node = node.left
        }
        return node
    }
    
    
    this.max = function(key){
        return maxNode(root)

    }

    var maxNode = function(node){
        if(node){
            while(node && node.right !== null){
                node = node.right
            }
            return node.key
        }
        return null
    }

    
    this.inOrderTraverse = function(callback){
        this.inOrderTraverseNode(root, callback)

    }

    var inOrderTraverseNode = function(node, callback){
        if(node !== null){
            inOrderTraverseNode(node.left, callback)
            callback(node.key)
            inOrderTraverseNode(node.right, callback)
        }
    }

    this.preOrderTraverse = function(callback){
        this.preOrderTraverseNode(root, callback)

    }

    var preOrderTraverseNode = function(node, callback){
        if(node !== null){
            callback(node.key) 
            preOrderTraverseNode(node.left, callback)
            preOrderTraverseNode(node.right, callback)
        }
    }

    this.postOrderTraverse = function(callback){
        this.postOrderTraverseNode(root, callback)

    }

    var postOrderTraverseNode = function(node, callback){
        if(node !== null){
           postOrderTraverseNode(node.left, callback)
           postOrderTraverseNode(node.right, callback)
           callback(node.key)
        }
    }

    

}