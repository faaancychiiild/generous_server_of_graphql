import DynamoDB from '../config/aws'

const fetchProjects = async () => {
  let data = await DynamoDB.getProjects()
  if (Array.isArray(data)){
    data:[] = data.map(item => ({
      title: item.title,
      desc: item.desc,
      assets: item.assets,
      // cover: item.assets?.[0],
      tech: item.tech
    }))
    return data
  }
  return []
}

const projects = fetchProjects()

const resolvers = {
  Query: {
    projects: () => {
      return projects
    }
  },
  Mutation: {
    addProject: (root, args, context) => {
      DynamoDB.addProject(args)
      console.log(root, args, context);
      
      return args
    }
  }
}

export default resolvers