/**
 * Created by Freeman on 2017/5/16.
 */
import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import WeUI from 'react-weui'
const {
  ButtonArea,
  CellBody,
  CellHeader,
  FormCell,
  Label,
} = WeUI;
import {renderCity, renderInputField, renderTextAreaField, renderUpload} from "../../commons/render";
@reduxForm({
  form: 'publishRecruit'
})
export default class PublishForm extends Component {

  render () {
    const {handleSubmit,catList} = this.props
    return (
      <form onSubmit={handleSubmit}>
        <FormCell select selectPos="after">
          <CellHeader>
            <Label>请选择分类</Label>
          </CellHeader>
          <CellBody>
            <Field name="catId" label="请选择分类" className="weui-select" component="select">
              {
                catList.map(catInfo => (
                  <option key={catInfo.catId} value={catInfo.catId}>{catInfo.catName}</option>
                ))
              }
            </Field>
          </CellBody>
        </FormCell>
        <Field name="title" label="标题" type="text" placeholder="标题" component={renderInputField}/>
        <Field name="image" component={renderUpload}/>

        <Field name="content" label="详细内容"  placeholder="详细内容" component={renderTextAreaField}/>
        <Field name="demand" label="要求"  placeholder="要求" component={renderTextAreaField}/>
        <Field name="extra" label="备注"  placeholder="备注" component={renderTextAreaField}/>
        <Field name="contact" label="联系人" type="text" placeholder="联系人" component={renderInputField}/>
        <Field name="phoneNum" label="手机" type="tel" placeholder="手机" component={renderInputField}/>
        <Field name="price" label="价格" type="text" placeholder="价格" component={renderInputField}/>
        <Field name="startDate" label="开始日期" type="date" placeholder="开始日期" component={renderInputField}/>
        <Field name="endDate" label="结束日期" type="date" placeholder="结束日期" component={renderInputField}/>
        <Field name="startTime" label="上课时间" type="time" placeholder="上课时间" component={renderInputField}/>
        <Field name="endTime" label="下课时间" type="time" placeholder="下课时间" component={renderInputField}/>


        <Field name="address" label="地址" type="text" placeholder="地址" component={renderCity}/>
        <Field name="detailAddress" label="详细地址" type="text" placeholder="详细地址" component={renderInputField}/>

        <ButtonArea>
          <button type="submit" className="weui-btn weui-btn_primary">
            保存
          </button>
        </ButtonArea>
      </form>
    )
  }
}
