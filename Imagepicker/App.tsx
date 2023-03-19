var options = {
    title: 'Select Image',
     customButtons: [
     {
     name: 'customOptionKey',
     title: 'Choose Photo from Custom Option'
     },
     ],
     storageOptions: {
     skipBackup: true,
     path: 'images',
     },
     };
     ImagePicker.showImagePicker(options, response => {
     console.log('Response = ', response);
     if (response.didCancel) {
     console.log('User cancelled image picker');
     } else if (response.error) {
     console.log('ImagePicker Error: ', response.error);
     } else if (response.customButton) {
     console.log('User tapped custom button: ',
     response.customButton
     );
     alert(response.customButton);
     } else {
     setFilePath(response);
     }});
    