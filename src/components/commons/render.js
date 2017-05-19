/**
 * Created by Freeman on 2017/5/16.
 */
import React,{Component} from 'react'
import WeUI from 'react-weui'
const {
  CellHeader,
  CellBody,
  CellFooter,
  FormCell,
  Input,
  Label,
  TextArea,
  Icon,
  CityPicker,
  Uploader,
  Form,
  Gallery,
  GalleryDelete,
} = WeUI

import cnCity from '../../constants/cnCity'
export const renderInputField = ({input, label, type, placeholder, meta: {touched, error}}) => (
    <FormCell warn={touched && error}>
      <CellHeader>
        <Label>{label}</Label>
      </CellHeader>
      <CellBody>
        <Input type={type} placeholder={placeholder} {...input} />
      </CellBody>
      {
        touched && error &&
        <CellFooter>
          <Icon value="warn" />
        </CellFooter>
      }
    </FormCell>
)

export const renderTextAreaField = ({input, label, placeholder, meta: {touched, error}}) => (
  <FormCell warn={touched && error}>
    <CellHeader>
      <Label>{label}</Label>
    </CellHeader>
    <CellBody>
      <TextArea placeholder={placeholder} {...input} />
    </CellBody>
  </FormCell>
)

export class renderCity extends Component{

  constructor (props) {
    super(props)

    this.state = {
      city_show:false,
      city_value:'',
    }
  }

  handleChange = (text) =>{

    this.setState({
      city_value: text,
      city_show: false
    })

    const { input: {onChange } } = this.props
    onChange(text)
  }

  render() {
    return (
      <FormCell>
        <CellHeader>
          <Label>地址</Label>
        </CellHeader>
        <CellBody>
          <Input type="text"
                 name="address"
                 value={this.state.city_value}
                 onClick={ e=> {
                   e.preventDefault();
                   this.setState({city_show: true})
                 }}
                 placeholder="选择你的地区"
                 readOnly={true}
          />
        </CellBody>
        <CityPicker
          data={cnCity}
          onCancel={e=>this.setState({city_show: false})}
          onChange={this.handleChange}
          show={this.state.city_show}
        />
      </FormCell>
    )
  }
}

export class renderUpload extends Component{

  constructor (props) {
    super(props)
    this.renderGallery = this.renderGallery.bind(this)
    this.state = {
      demoFiles:[],
      gallery:false,
    }
  }

  handleChange = (file,e) =>{
    const that = this
    const { input: {onChange } } = this.props

    let newFiles = [...that.state.demoFiles, {url:file.data}];
    this.setState({
      demoFiles: newFiles
    });

    onChange(file.nativeFile)
  }

  renderGallery(){
    if(!this.state.gallery) return false;

    return (
      <Gallery src={this.state.gallery.url} show onClick={ e=> {
        //avoid click background item
        e.preventDefault()
        e.stopPropagation();
        this.setState({gallery: false})
      }}>
        <GalleryDelete onClick={ e=> {
          this.setState({
            demoFiles: this.state.demoFiles.filter((e,i)=>i!=this.state.gallery.id),
            gallery: false
          })
        }} />
      </Gallery>
    )
  }

  render() {
    const that = this
    return (
    <Form>
      { this.renderGallery() }
      <FormCell>
        <CellBody>
          <Uploader
            title="图片"
            name="image"
            maxCount={1}
            files={this.state.demoFiles}
            onError={msg => alert(msg)}
            onChange={this.handleChange}
            onFileClick={
              (e, file, i) => {
                console.log('file click', file, i)
                that.setState({
                  gallery: {
                    url: file.url,
                    id: i
                  }
                })
              }
            }
            lang={{
              maxError: maxCount => `Max ${maxCount} images allow`
            }}
          />
        </CellBody>
      </FormCell>
    </Form>

    )
  }
}
