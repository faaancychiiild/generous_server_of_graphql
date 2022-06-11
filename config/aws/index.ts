import aws from 'aws-sdk'
import config from './setup'
import uuidv1 from 'uuidv1'

const getProjects = async () => {
  aws.config.update(config.aws_remote_config)
  const DocClient = new aws.DynamoDB.DocumentClient()
  
  return new Promise((resolve, reject) => {
    DocClient.scan({
      TableName: config.aws_table_name
    }, (err, data) => {
      if (err) {
        console.log(err)
        reject([])
      } else {
        const { Items } = data
        resolve(Items)
      }
    })
  })
}

const addProject = async data => {
  aws.config.update(config.aws_remote_config)

  const DocClient = new aws.DynamoDB.DocumentClient()
  const Item = { ...data }
  Item.id = uuidv1();

  const params = {
      TableName: config.aws_table_name,
      Item: Item
  }

  DocClient.put(params, function (err, data) {
      if (err) {
          console.log(err)
      } else {
        return data
      }
  })
}

export default {
  getProjects,
  addProject
}