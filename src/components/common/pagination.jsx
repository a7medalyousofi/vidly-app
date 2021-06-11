import React from "react";
import PropTypes from "prop-types";
import lodash from "lodash";

const pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
	const pagesCount = Math.ceil(itemsCount / pageSize);
	if (pagesCount === 1) return null;
	const pages = lodash.range(1, pagesCount + 1);
	return (
		<ul className="pagination">
			{pages.map((page) => (
				<li
					style={{ cursor: "pointer" }}
					key={page}
					className={page === currentPage ? "page-item active" : "page-item"}
				>
					<a className="page-link" onClick={() => onPageChange(page)}>
						{page}
					</a>
				</li>
			))}
		</ul>
	);
};
{
	/* pagination.propTypes <== (propTypes) must be in camaleCase,
	or its will not work */
}
pagination.propTypes = {
	itemsCount: PropTypes.number.isRequired,
	pageSize: PropTypes.number.isRequired,
	currentPage: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
};

export default pagination;
