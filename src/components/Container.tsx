import type React from "react";
import cx from "classnames"

type Props = {
    children: React.ReactNode,
    as?: React.ElementType,
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

const Container: React.FC<Props> = ({ as: Element = 'div', children, ...props }) => {
    return <Element {...props} className={cx("max-w-[960px] mx-auto", props.className)}>
        {children}
    </Element>
}

export default Container