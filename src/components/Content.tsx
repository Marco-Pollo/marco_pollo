import React, { memo, useEffect } from 'react';

const Content = () => {
    useEffect(() => {

    }, []);

    return (
        <div className='content'>
            This is the content of your application
        </div>
    );
};

Content.propTypes = {};

Content.defaultProps = {};

Content.displayName = 'Content';

export default memo(Content);
