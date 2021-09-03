
function BinarySearchTree() {
    var Node = function(key) {
        this.key = key
        this.left = null
        this.right = null
    }
    var root = null

    //metodo de inserir 
    this.insert = function(key) {
        var newNode = new Node(key)//cria novo nó(11,5,7)

        if(root === null) {
            root = newNode
        } else {
            insertNode(root, newNode)
        }
    }
    
    var insertNode = function(node, newNode) {//11
        if(node.key > newNode.key) {
            if(node.left === null) {
                node.left = newNode
            } else {
                insertNode(node.left, newNode)
            }
        } else {
            if(node.right === null) {
                node.right = newNode
            } else {
                insertNode(node.right, newNode)
            }
        }
    }

    //metodo de busca
    this.search = function(key) {
        return searchNode(root, key)
    }

    var searchNode = function(node, key) {
        if(node === null) {
            return false
        }
        if(key < node.key) {
            return searchNode(node.left, key)
        } else if(key > node.key) {
            return searchNode(node.right, key)
        } else {
            return true
        }
    }

    //remove
    this.remove = function(key) {
        root = removeNode(root, key)
    }

    var removeNode = function(node, key) {
        if(node === null) {
            return null
        }
        if(key < node.key) {
            node.left = removeNode(node.left, key)//11 5
            return node
        } else if(key > node.key) {
            node.right = removeNode(node.right, key)
            return node
        } else {
            if(node.left === null && node.right === null) {
                node = null
                return node
            }
            if(node.left === null) {
                node = node.right
                return node
            } else if(node.right === null) {
                node = node.left
                return node
            }
            var aux = findMinNode(node.right)
            node.key = aux.key
            node.right = removeNode(node.right, aux.key)
            return node
        }
    }

    //buscar valor minimo
    var findMinNode = function(node) {
        while(node && node.left !== null) {//por que left? porque tudo que foi inserido a esquerda é o menor valor.
            node = node.left
        }
        return node
    }

    this.min = function() {
        return minNode(root)
    }

    var minNode = function(node) {
        if(node) {
            while(node && node.left !== null) {
                node = node.left
            }
            return node.key
        }
        return null
    }

    //buscar valor maximo
    this.max = function() {
        return maxNode(root)
    }
    
    //busca o maior valor
    var maxNode = function(node) {
        if(node) {
            while(node && node.right !== null) {
                node = node.right
            }
            return node.key
        }
        return null
    }

    
    // pega todos os elementos e imprime em ordem, do menor para o maior. 
    this.inOrderTraverse = function(callback) { 
        inOrderTraverseNode(root, callback)
    }

    var inOrderTraverseNode = function(node, callback) {
        if(node !== null) {
            inOrderTraverseNode(node.left, callback)
            callback(node.key)
            inOrderTraverseNode(node.right, callback)
        }
    }

    this.preOrderTraverse = function(callback) { //pre order primeiro ele imprime os nós e depois os decendentes 
        preOrderTraverseNode(root, callback)
    }

    var preOrderTraverseNode = function(node, callback) {
        if(node !== null) {
            callback(node.key)
            preOrderTraverseNode(node.left, callback)
            preOrderTraverseNode(node.right, callback)
        }
    }

    this.postOrderTraverse = function(callback) {//primeiro ele vai imprimir os decendentes e depois os nós 
        postOrderTraverseNode(root, callback)
    }

    var postOrderTraverseNode = function(node, callback) {
        if(node !== null) {
            postOrderTraverseNode(node.left, callback)
            postOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    }
}