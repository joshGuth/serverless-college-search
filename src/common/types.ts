export interface College {
    id: number
    school: {name: string},
    location: {lat: string, lon: string}
  }

 export interface CollegesResponse {
    results: College[]
  }

 export interface FormError {
    message: string
  }